class Calculator(AdvancedArithmetic):
    def divisorSum(self, n):
        array = list(x for x in range(1,n+1) if n%x==0)
        return sum(array)
