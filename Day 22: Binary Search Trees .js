// Start of function getHeight
this.getHeight = function(root) {
    if (root === null)
        return -1
    // Add your code here
    let left = 1 + this.getHeight(root.left)
    let right = 1 + this.getHeight(root.right)
    return Math.max(left,right)
}; // End of function getHeight