package com.resources;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", glue = { "com.stepDefinition" },
tags = { "@smokeTest" },
plugin = {
		"html:src/main/resources", "rerun:rerun/failed_scenarios.txt" },
dryRun = false,
monochrome = true,
strict = true)

public class TestRunner {
}
