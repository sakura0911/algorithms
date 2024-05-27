class UnaryTreeNode {
    constructor(value) {
        this.value = value;
        this.child = null;
    }
}

// Função para adicionar um filho ao nó
UnaryTreeNode.prototype.addChild = function(childValue) {
    const childNode = new UnaryTreeNode(childValue);
    this.child = childNode;
    return childNode;
};

// Exemplo de uso
const root = new UnaryTreeNode('root');
const child1 = root.addChild('child1');
const child2 = child1.addChild('child2');
const child3 = child2.addChild('child3');

// Função para percorrer a árvore
function traverse(node) {
    if (node === null) {
        return;
    }
    console.log(node.value);
    traverse(node.child);
}

// Percorrendo a árvore a partir da raiz
traverse(root);
