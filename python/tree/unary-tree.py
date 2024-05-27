class UnaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.child = None

    def add_child(self, child_value):
        child_node = UnaryTreeNode(child_value)
        self.child = child_node
        return child_node

def traverse(node):
    if node is None:
        return
    print(node.value)
    traverse(node.child)

# Creating the tree
root = UnaryTreeNode("root")
child1 = root.add_child("child1")
child2 = child1.add_child("child2")
child3 = child2.add_child("child1")

# Traversing the tree
traverse(root)
