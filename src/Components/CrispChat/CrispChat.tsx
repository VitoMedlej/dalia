"use client"
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e672ca5f-f600-4343-bb45-93aa519066f7");
  });

  return null;
};

export default CrispChat;
