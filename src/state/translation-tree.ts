export interface TranslationNode {
  [key: string]: TranslationNode | string | null;
}

export default class TranslationTree {
  private tree: TranslationNode;

  constructor(tree: TranslationNode) {
    this.tree = tree;
  }

  get keys(): string[] {
    const recurseKeys = function (
      keys: string[],
      node: TranslationNode | string | null
    ): string[] {
      if (!node) {
        return [];
      } else if (typeof node === "string") {
        return [keys.join(".")];
      } else {
        return Object.entries(node).flatMap(([key, value]) =>
          recurseKeys([...keys, key], value)
        );
      }
    };
    return recurseKeys([], this.tree);
  }

  get all(): TranslationNode {
    return this.tree;
  }

  // returns false when path conflicts with existing keys, otherwise true
  allowsKey(key: string): boolean {
    const parts = key.split(".");
    let cursor = this.tree;

    while (parts.length > 0) {
      const next = cursor[parts[0]];
      if (!next) {
        return true;
      }
      if (typeof next === "string") {
        return parts.length === 1;
      } else {
        parts.shift();
        cursor = next;
      }
    }
    return false;
  }
}
