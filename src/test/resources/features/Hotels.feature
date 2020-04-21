@web

  Feature: Hotels page features
    Description here
    Background:
      Given I am on default location search locations screen


    @hotels1
    Scenario Outline: Verify user can only view the result by selected property class
      When I enter Cincinnati and select CityName field on the homepage page
      And I enter 08/07/20 and select CheckIn field on the homepage page
      And I enter 08/09/20 and select CheckOut field on the homepage page
      And I enter 1 and select Rooms field on the homepage page
      Then I verify system displays only <stars> hotels on search result
      Examples:

        | stars  |
        | 3 star |
        | 4 star |
        | 5 star |

    @hotels2
    Scenario: List of all of hotel within 10 miles radius of downtown
      When I enter Cincinnati and select CityName field on the homepage page
      And I enter 09/07/20 and select CheckIn field on the homepage page
      And I enter 09/09/20 and select CheckOut field on the homepage page
      And I enter 1 and select Rooms field on the homepage page
      And I select system displays all hotels within 10 or less mile radius of downtown
      Then I select all Hilton hotels from previous list

    @hotels3
    Scenario Outline: Verify user can only view the result by selected property class U
      When I enter Cincinnati and select CityName field on the homepage page U
      And I enter 11/07/20 and select CheckIn field on the homepage page U
      And I enter 11/09/20 and select CheckOut field on the homepage page U
      And I enter 1 and select Rooms field on the homepage page U
      Then I verify system displays only <stars> hotels on search result U
      Examples:

        | stars  |
        | 3 star |
        | 4 star |
        | 5 star |