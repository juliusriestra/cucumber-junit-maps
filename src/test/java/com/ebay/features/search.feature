Feature: search product sporting 

Scenario: Search product online by pressing enter 

	Given i am on the store home page 
	When enter the requested product 
	Then press enter 
	And i select the specifications
	| brand | size |
	| PUMA  |  10  |
	Then i see the list of the requested product 
	Then i close browser 
	
Scenario: Search product online by pressing button 
	Given i am on the store home page 
	When enter the requested product 
	Then click the button search 
	And i select the specifications
	| brand  | size |
	| adidas |   9  |
	Then i see the list of the requested product 
	Then i close browser 
