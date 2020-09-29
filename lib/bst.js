class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (current) {
            if (current.left === null && current.right === null) {
                if (value < current.val) {
                    current.left = newNode;
                    return;
                } else {
                    current.right = newNode;
                    return;
                }
            }


            if (value < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    searchRecur(value) {
        if (!this.root) return false;
        if (value < this.val) {
            if (!this.left) return false;
            return this.searchRecur(this.left)
        } else if (value > this.val) {
            if (!this.right) return false;
            return this.searchRecur(this.right)
        } else {
            return true;
        }

    }
}

module.exports = {
    TreeNode,
    BST,
};

// 8

//          10
//     5          16
// 1      7          16


// tree.insert(10);
// tree.insert(5);
// tree.insert(16);
// tree.insert(1);
// tree.insert(7);
// tree.insert(16);