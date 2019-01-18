class Difference:
    def __init__(self, a):
        self.__elements = a

	# Add your code here
    def computeDifference(self):
        self.__elements = sorted(self.__elements)
        self.maximumDifference = max(self.__elements) - min(self.__elements)