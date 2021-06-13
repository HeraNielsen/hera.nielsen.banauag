[Question] Other possible scenarios would you suggest for testing Jupiter Toys Application?
  [Answer]
  1. [Test Scenario] For Log-in page
      [Test Cases]
      1. [negative testing] Validate if username is invalid and password is invalid
      2. [negative testing] Validate if username is invalid and password is valid
      3. [negative testing] Validate if username is valid and password is invalid
      4. [negative testing] Validate if username and password are blank click Login button
      5. [positive testing] Validate if username is valid and password is valid
      6. [positive testing] Validate if username and password are populated then click Cancel. Should go back to home page.

  2. [Test Scenario] For Contact page
     1. [negative testing] Enter numbers in forename field
     2. [negative testing] Enter special characters in forename field
     3. [negative testing] Enter numbers in surname field
     4. [negative testing] Enter special characters in surname field
     5. [negative testing] Maximum number in Telephone field
     6. [negative testing] Minimum number in Telephone field

  3. [Test Scenario] For Cart page
     1. [positive testing] Validate remove item button behavior
     2. [positive testing] Validate empty cart button behavior
     3. [positive testing] Validate Checkout link behavior
     4. [positive testing] Validate Shopping link behavior
   
  4. [Test Scenario] For Checkout page
     1. [negative testing] Empty fields, click submit button
     2. [negative testing] Populate Delivery details, empty Payment Details, click submit button
     3. [negative testing] Select card type, enter characters in card number 
     4. [negative testing] Select card type, enter special characters in card number
     5. [negative testing] Select card type, enter 2 digits in card number
     6. [negative testing] Select card type, enter 2000 digits in card number
     7. [positive testing] Populate required fields then click Submit button

[Question] Jupiter Toy is expected to grow & expand its offering into books, tech and modern art. We are expecting  the test to grow to a very large numbers
  - What approach could be used to reduce overall execution time
  
  [Answer] 
  
    1. Use Jenkins to schedule stable or existing tests execution probably at night. This will also update server environment.
    2. headless  testing will also reduce execution time
    3. Introduce test modularization. Break the tests into sets and subsets, look at similar test cases, reuse.
      3.1. can do parallel testing
    4. Choose which tests to run based on what has changed or added.
    5. Ownership. Dedicated testers per offering(toy,books,tech,modern art)
    6. Software Testing Metrics(useful for most susceptible to defects so can allocate people in where it is needed.) 

   - How will your framework cater to this?
   
    1. I will have this one place/machine/cloud that all the code and scripts are located.
    2. There will be different server machines/computers where automation tool server is running
    3. Then configurations to execute the tests in #2
    
```
                                Main (containing code/scripts)
                      /                   |                       \
            Server 1(Cypress)       Server 2(Selenium)          Server 3(cucumber)
            /            \          /             \              /            \
    Integration    Integration    Regression    Regression    UAT for       UAT for browser 			
     test on        test on       on mobile     on desktop   Mobile IOS
    Chrome         Safari

```


    More details to #1:
    1. Let's say Jenkins. Dev will push their codes. Jenkins will run and distribute them to containers(ex: docker) and update the servers accordingly.

[Question] Describe when to use BDD approach to automation and when not to use BDD.
  [Answer] I have very little exp in BDD so pls excuse me.
  BDD describes the behavior from the perspective of those people who understand the customers.
  First, what is the goal of our testing? Developer testing(quality) or customer testing(behavior)?
  If our goal is to do customer testing(behavior) then it will be the right to use BDD approach for me.
  But if we need to do exhaustive check of everything then BDD is not the right approach to use.

