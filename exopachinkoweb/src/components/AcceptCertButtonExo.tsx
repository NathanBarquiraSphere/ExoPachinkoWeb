import React, { useState, useEffect } from "react";
import { NetworkingManager } from "../networking/NetworkingManager";
import { Button, HStack, ButtonGroup } from "@chakra-ui/react";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";

const AcceptCertButtonExo = () => {

    const handleClick = () =>
    {
        window.open("https://10.232.51.206:3004");
    }

    return (
    <section className="ipcon">
            <HStack spacing={4}>
            <Button style={{width: '365px', marginBottom: '5px', marginTop: '5px'}} colorScheme="teal" onClick={handleClick}>
                Accept Cert
            </Button>
            </HStack>
    </section>
    );
};

export default AcceptCertButtonExo;
