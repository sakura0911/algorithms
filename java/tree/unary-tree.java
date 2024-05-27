class UnaryTreeNode {
    String value;
    UnaryTreeNode child;

    // Constructor
    public UnaryTreeNode(String value) {
        this.value = value;
        this.child = null;
    }

    // Method to add a child node
    public UnaryTreeNode addChild(String childValue) {
        UnaryTreeNode childNode = new UnaryTreeNode(childValue);
        this.child = childNode;
        return childNode;
    }

    // Static method to traverse the tree
    public static void traverse(UnaryTreeNode node) {
        if (node == null) {
            return;
        }
        System.out.println(node.value);
        traverse(node.child);
    }

    public static void main(String[] args) {
        // Creating the tree
        UnaryTreeNode root = new UnaryTreeNode("root");
        UnaryTreeNode child1 = root.addChild("child1");
        UnaryTreeNode child2 = child1.addChild("child2");
        UnaryTreeNode child3 = child2.addChild("child1");

        // Traversing the tree
        traverse(root);
    }
}
