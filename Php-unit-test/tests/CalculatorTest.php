//php unit automatically detects the test class and runs the tests if we name the class with the suffix Test
<?php
class CalculatorTest extends PHPUnit\Framework\TestCase
{
    public function testAdd()
    {
        $calculator = new app\Calculator();
        $this->assertEquals(5, $calculator->add(2, 3), "Addition of 2 and 3 should equal 5");
    }
    public function testSubtract()
    {
        $calculator = new app\Calculator();
        $this->assertEquals(1, $calculator->subtract(7, 2), "Subtraction of 3 and 2 should equal 1");
    }
}
