
"use client"
import { Card, Flex, Text, ProgressCircle, Title } from "@tremor/react";

export default  function Progress () {

    return (
        <Card className="max-w-auto  h-200">
        
        <Flex className="justify-center ">
            <Title><h1 className="text-xl">Progress to Next Tier</h1></Title>
        </Flex>

        <Flex className="space-x-5" justifyContent="start">
          <ProgressCircle value={25.5} size="xl" 
                className="mt-6"
          >            <span className="text-2xl text-gray-700 font-medium">25%</span>
        </ProgressCircle>
          <div>
              <Text className="font-medium text-gray-700">$340 of $1500 minimum</Text>
          </div>
        </Flex>
      </Card>
    );
};