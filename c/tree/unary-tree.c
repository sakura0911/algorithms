#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Definição da estrutura UnaryTreeNode
typedef struct UnaryTreeNode {
    char* value;
    struct UnaryTreeNode* child;
} UnaryTreeNode;

// Função para criar um novo nó
UnaryTreeNode* createNode(const char* value) {
    UnaryTreeNode* newNode = (UnaryTreeNode*)malloc(sizeof(UnaryTreeNode));
    newNode->value = strdup(value); // Aloca memória e copia a string
    newNode->child = NULL;
    return newNode;
}

// Função para adicionar um filho ao nó
UnaryTreeNode* addChild(UnaryTreeNode* parent, const char* childValue) {
    UnaryTreeNode* childNode = createNode(childValue);
    parent->child = childNode;
    return childNode;
}

// Função para percorrer a árvore
void traverse(UnaryTreeNode* node) {
    if (node == NULL) {
        return;
    }
    printf("%s\n", node->value);
    traverse(node->child);
}

// Função para liberar memória alocada para a árvore
void freeTree(UnaryTreeNode* node) {
    if (node == NULL) {
        return;
    }
    freeTree(node->child);
    free(node->value);
    free(node);
}

// Função principal
int main() {
    // Criando a árvore
    UnaryTreeNode* root = createNode("root");
    UnaryTreeNode* child1 = addChild(root, "child1");
    UnaryTreeNode* child2 = addChild(child1, "child2");
    UnaryTreeNode* child3 = addChild(child2, "child1");

    // Percorrendo a árvore
    traverse(root);

    // Liberando memória alocada para a árvore
    freeTree(root);

    return 0;
}
