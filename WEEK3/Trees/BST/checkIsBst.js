function isBst(node,min=-Infinity,max=Infinity){
    if(!node)return true
    
  if(node.value<=min||node.value>=max){
      return false
  }
  return isBst(node.left,min,node.value)&&isBst(node.right,node.value,max)
}
