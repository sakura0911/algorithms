using System;

class UnaryTreeNode
{
    public string Value { get; set; }
    public UnaryTreeNode Child { get; set; }

    // Constructor
    public UnaryTreeNode(string value)
    {
        this.Value = value;
        this.Child = null;
    }

    // Method to add a child node
    public UnaryTreeNode AddChild(string childValue)
    {
        UnaryTreeNode childNode = new UnaryTreeNode(childValue);
        this.Child = childNode;
        return childNode;
    }

    // Method to traverse the tree
    public static void Traverse(UnaryTreeNode node)
    {
        if (node == null)
        {
            return;
        }
        Console.WriteLine(node.Value);
        Traverse(node.Child);
    }

    public static void Main(string[] args)
    {
        // Creating the tree
        UnaryTreeNode root = new UnaryTreeNode("root");
        UnaryTreeNode child1 = root.AddChild("child1");
        UnaryTreeNode child2 = child1.AddChild("child2");
        UnaryTreeNode child3 = child2.AddChild("child1");

        // Traversing the tree
        Traverse(root);
    }
}
