export interface D3Node {
  children?: Array<any>;
  data: {
    name: string,
    parent: string | null
  };
}
