<?php

class UnaryTreeNode {
    public $value;
    public $child;

    // Constructor
    public function __construct($value) {
        $this->value = $value;
        $this->child = null;
    }

    // Method to add a child node
    public function addChild($childValue) {
        $childNode = new UnaryTreeNode($childValue);
        $this->child = $childNode;
        return $childNode;
    }

    // Static method to traverse the tree
    public static function traverse($node) {
        if ($node == null) {
            return;
        }
        echo $node->value . "\n";
        self::traverse($node->child);
    }
}

// Creating the tree
$root = new UnaryTreeNode("root");
$child1 = $root->addChild("child1");
$child2 = $child1->addChild("child2");
$child3 = $child2->addChild("child1");

// Traversing the tree
UnaryTreeNode::traverse($root);

?>
