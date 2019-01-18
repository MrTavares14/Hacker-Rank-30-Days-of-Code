//Write your code here
class Calculator{
    power(n,p) {
        if (n >= 0 && p >= 0) {
            return n**p
        } else {
            return 'n and p should be non-negative'
        }
    }
}
