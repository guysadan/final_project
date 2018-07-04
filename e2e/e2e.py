#!/usr/bin/env python

import unittest
from selenium import webdriver
import time


class TestUbuntuHomepage(unittest.TestCase):
    
    def setUp(self):
        self.browser = webdriver.Chrome()
        
    def testTitle(self):
        email = "guy@gmail.com"
        password = "12345"
        name = "guy"
        self.browser.get('http://localhost/')
        #Go To Sign Up Form
        self.browser.find_element_by_css_selector("a[href='/signup']").click()
        #Enter Details
        self.browser.find_element_by_css_selector("input[name='email']").send_keys(email)
        self.browser.find_element_by_css_selector("input[name='name']").send_keys(name)
        self.browser.find_element_by_css_selector("input[name='password']").send_keys(password)
        self.browser.find_element_by_css_selector("button[type='submit']").click()
        #Calculate
        self.browser.find_element_by_css_selector(".digit-3").click()
        self.browser.find_element_by_css_selector(".operator-multiply").click()
        self.browser.find_element_by_css_selector(".digit-2").click()
        self.browser.find_element_by_css_selector(".operator-equals").click()
        result = self.browser.find_element_by_css_selector(".display").text
        print "Result: " + result
	time.sleep( 5 )
        assert self.browser.find_element_by_css_selector(".display").text == "6"
                
    def tearDown(self):
        self.browser.quit()


if __name__ == '__main__':
    unittest.main(verbosity=2)

