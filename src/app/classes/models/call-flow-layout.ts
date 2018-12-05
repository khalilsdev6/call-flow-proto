
import * as d3 from 'd3';
export class CallFlowLayout {
  private margin = {
    top: 20,
    right: 120,
    bottom: 20,
    left: 120
  };

  private width = 900 - this.margin.right - this.margin.left;
  private height = 300 - this.margin.top - this.margin.bottom;
  private nodeRadius = 25;

  private svg;
  private zoom;
  private root;
  // TODO: Compute this dynamically
  private treeDepth = 5;
  // Creates a tree layout of our datum
  private treeLayoutCreator: d3.ClusterLayout<any> = d3.cluster().size([this.height, this.width]);

  constructor () {
    console.log(d3);
  }

  /**
   * @func setupTree
   * @desc Creates the root svg elements to setup the tree.
   * @param {string} rootElementSelector the element we wish to mount the d3
   * visualization to.
   */

  setupTree (rootElementSelector: string) {
    const { width, margin, height } = this;

    // Setup zoom
    this.zoom = d3.zoom()
      .scaleExtent([1, 10])
      .on("zoom", this.onZoomOrDrag.bind(this));

    this.svg = d3
      .select(rootElementSelector)
      .append('svg')
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom)
      .call(this.zoom)
      // So it looks like we're going to add a g tag inside of the
      // svg.
      .append('g')
      // Ahh, we probably just want to do that to move the area where we're going
      // to be drawing things all the way into view utilizing the margins.
      // Also, the reference that the svg variable will be holding will be this
      // slightly transformed g element.
      .attr('transform', `translate(${margin.left},${margin.top})`);
  }

  private onZoomOrDrag () {
    const { k, x, y } = d3.event.transform;
    const {margin } = this;
    this.svg.attr("transform", "translate(" + `${x + margin.left},${y + margin.top}` + ")scale(" + `${k}` + ")");
  }

  update (workflowData: any) {
    // Create hierarchy
    this.root = d3.hierarchy(workflowData[0]);
    // Setup layout
    this.treeLayoutCreator(this.root);
    // De-normalize how each of the nodes get spaced out in the tree.
    this.root.descendants().forEach((d) => { d.y = d.depth * (this.width / this.treeDepth); });
    // Create the links between nodes
    this.createLinks();
    // Create nodes
    this.createNodes();
  }

  private createNodes () {
    // Create nodes
    const node = this.svg
    // ==================
    // 1. Create the node group
    // ===================
    // Similarly to how we created the links, we're going to
    // select what we want to create, (but this could be anything
    // that doesn't currently exist).
    .selectAll('.node')
    // Then, we want to use every decendany of the tree from the
    // root INCLUDING the root this time! Because we want to actually
    // draw the root node as well, we include it.
    .data(this.root.descendants())
    // Create the virtual .node elements
    .enter()
    //  For each element, append a group element
    .append("g")
    // That group element should have a class of
    // "node" on it. But depending on if the class has children or not,
    // we also say it's an internal node or a leaf node.
    .attr("class", function(d) {
      return "node" + (d.children ? " node--internal" : " node--leaf");
    })
    // In order to get our nodes to slide over from left to right, we
    // need to apply a translation on it. This function takes the
    // data from this particularly selected node and uses the x, y
    // coordinates that D3 actually created for us when it build the
    // tree layout.
    .attr("transform", function(d) {
      return "translate(" + d.y + "," + d.x + ")";
    });

    // ============================
    // 2. Add the circle to the node group
    // ============================
    // Next, we add the circle to the node group
    node.append("circle")
    // We'll make the radius 20 px, so it should be
    // 40 px wide overall.
    .attr("r", this.nodeRadius)
    // Then we can hook up event listeners to do respond to
    // dom events.
    .on("click", d => { console.log(d, "clicked"); })
    .on("mouseover", d => { console.log("hovering over item"); })
    .on("mouseleave", () => { console.log("mouse leave"); });

    // ==============================
    // 3. Add the text to the node group
    // ==============================
    // Then, we'll add the text to the node group as well.
    node.append("text")
    // dy attribute allows you to shift the text position vertically.
    .attr("dy", 3)
    // Depending on if the node has children or not, we put the text on
    // the left or the right hand side. x is the coordinate.
    .attr("x", function(d) {
      return 0;
    })
    .attr('y', () => {
      return this.nodeRadius + this.nodeRadius / 2;
    })
    // Depending on if the node is a leaf node or not, we choose to
    // render the text on the left or right. Right if the node is
    // a leaf.
    .style("text-anchor", function(d) {
      return "middle";
    })
    .text(function (d) {
      return d.data.name;
    });

    // ==================================
    // 4. Add the image
    // ==================================
    // We need to add the image last because there is no concept
    // of z-indexes in SVG.
    node.append('image')
      .attr('xlink:href', function (d) {
        return d.data.image;
      })
      .attr('height', this.nodeRadius)
      .attr('width', this.nodeRadius)
      .attr("transform", (d) => {
        return "translate(" + (-this.nodeRadius / 2) + "," + (-this.nodeRadius / 2) + ")";
      });
  }

  private createLinks () {
    // Create links
    this.svg
      .selectAll('.link')
      // descendants() is a function that will return all of the 
      // descendants in the tree after we've created a tree object
      // from the root. We want to use the data from every element under
      // the root element to build the links (root + next)
      .data(this.root.descendants().slice(1))
      // Create virtual links
      .enter()
      // For each virtual link, append a path
      .append('path')
      // On that path, add the "link" class
      .attr('class', 'link')
      // On the path, give it the data needed to actually draw
      // that path.
      .attr('d', this.drawLinkPath);
  }

  /**
   * @func drawLinkPath
   * @desc This function is responsible for drawing the link path.
   * The calculation that's being done here is common across the
   * d3 community but we're going to want to adjust this so that if
   * a node has more than 1 child, it renders the links coming from
   * the top and bottom of the node rather than from out of the right
   * hand side.
   *
   * This is drawn from the context of the child node to the parent
   * node.
   */

  private drawLinkPath(d) {
    const parent = d.parent;
    const parentsChildren = parent.children;
    const lineGenerator = d3.line().curve(d3.curveBasis);

    // If the parent has more than one child, it branches
    // out into 2 or more nodes. We want these to have a
    // particular curve to them. To do that, we need to utilize
    // our line generator function that will adjust the coordinates
    // that we were 'going' to use to generate our path, to a
    // different type of curve (d3.curveBasis).
    if (parentsChildren.length > 1) {
      return lineGenerator([
        [d.y, d.x],
        [d.y - (d.y - d.parent.y), d.x],
        [d.parent.y, d.x],
        [d.parent.y, d.parent.x]
      ]);
    }
    // If there was only one child, then we're drawing a horizontal
    // line. This is easy (and technically, we don't need to use)
    // a path to do this, but we will anyways to keep it consistent.
    else {
      return "M" + d.y + "," + d.x
        + "C" + (d.parent.y + 100) + "," + d.x
        + " " + (d.parent.y + 100) + "," + d.parent.x
        + " " + d.parent.y + "," + d.parent.x;
    }
  }

}

