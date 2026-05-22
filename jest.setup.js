require('@testing-library/jest-dom');

// Basically two things. To run the jest test runner in JS DOM environment, ie, the one we are using
// we need to add jest dom testing library to the setup/ environment before running every test file. 
// Additionally jest only loads setup files in an environment that recognizes CJS, hence the .js extension.
// So then we have a jest.setup.js which is requiring/importing the test library and then the jest.setup file
// is adding that to the jest environment before running every test file.