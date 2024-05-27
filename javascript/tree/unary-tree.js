class UnaryTreeNode{
    constructor(value){
        this.value=value
        this.child=null
    }
}

UnaryTreeNode.prototype.addChild=function(childValue){
    const childNode=new UnaryTreeNode(childValue)
    this.child=childNode
    return childNode
}

const root=new UnaryTreeNode('root')
const child1=root.addChild('child1')
const child2=child1.addChild('child2')
const child3=child2.addChild('child1')
 
function traverse(node){
    if(node==null){
        return
    }
    console.log(node.value)
    traverse(node.child)
}


traverse(root)