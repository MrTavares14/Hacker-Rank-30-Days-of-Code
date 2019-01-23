this.levelOrder = function(root) {
    var queue = []
    queue.push(root)        
    while (queue.length > 0) {
        var node = queue.shift()//remove the first element FIFO
        process.stdout.write(node.data + ' ')

        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    // Add your code here
    // To print values separated by spaces use process.stdout.write(someValue + ' ')
}; // End of function levelOrder