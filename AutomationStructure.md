```
app-under-test/
├── .github/                           * GitHub files
│   ├── CONTRIBUTING.md                * Documentation on contributing to this repo
│   └── ISSUE_TEMPLATE.md              * Template used to populate issues in this repo
│
├── test/                              * Tests Working directory
│   ├── e2e/                           * Contains all E2E TestWare
│   │   ├── tests/                     * Here we store all test files
│   │   │    ├── user/                 * Group tests by scope / flows
│   │   │    │   └── account.spec.js   * Tests relevant to account functionality
│   │   │    ├── admin/                * Group tests by scope / flows
│   │   │    │   └── dashboard.spec.js * Tests relevant to dashboard functionality
│   │   │    └── bugs/                 * Group tests for bugs that were found durring manual
│   │   │        └── bug.spec.js       * Tests relevant to Bug found and not covered above
│   │   │ 
│   │   ├── pages/                     * Here we store all Page Object files for the tests
│   │   │    ├── user/                 * Group all Page Objects by scope
│   │   │    │   └── security.po.js    * Security Page Object
│   │   │    ├── admin/                * -||-
│   │   │    │   └── dashboard.po.js   * Dashboard Page Object
│   │   │    ├── common/               * Page Objects that are not connected to a scope
│   │   │    │   └── login.po.js       * Login Page Object
│   │   │    └── components/           * Here we store any component of a page that repeats accross the app
│   │   │        ├── header.co.js      * Header component imported in all relevant Page Object files
│   │   │        └── errorpopup.co.js  * Error Message Popup component imported in all relevant Page Object files
│   │   │  
│   │   ├── testData/
│   │   │    ├── user.td.js            * Objects and Functions containing test data to be consumed by tests 
│   │   │    └── admin.td.js           * Objects and Functions containing test data to be consumed by tests 
│   │   │  
│   │   └── helpers/                   * Helper functions folder
│   │        └── helpers.js            * File with helper functions. If many more files will be added and functions grouped
│   │
│   ├── integration/                   * Contains all Integration tests
│   │   ├── tests/                     * All tests grouped by End-Point
│   │   │    ├── login.spec.js         * Login End-Point tests
│   │   │    └── profile.spec.js       * Profile End-Point tests
│   │   │
│   │   ├── testData/
│   │   │    ├── login.td.js           * Objects and Functions containing test data to be consumed by tests 
│   │   │    └── profile.td.js         * Objects and Functions containing test data to be consumed by tests 
│   │   │  
│   │   └── helpers/                   * Helper functions folder
│   │        └── helpers.js            * File with helper functions. If many more files will be added and functions grouped
│   │
│   ├── testReports/                   * Contains all test run reports
│   │   ├── e2e/                       * Test reports saved under a human readable format
│   │   │   └── [datetime_of_test_run] * Test results for each test run
│   │   └── integration/               * Test reports saved under a human readable format
│   │       └── [datetime_of_test_run] * Test results for each test run
│   │   
│   └── performance                    * Contains all Performance tests
│       └── [name].jmx                 * Performance tests file
│
├── node_modules/                      * Node dependencies
├── .gitignore                         * Example git ignore file
└── README.md                          * Relevant description
```
