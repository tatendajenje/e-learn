import { HStack } from '@chakra-ui/react';
import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa";





const socialLinks = [
    {
      icon: <FaFacebook />,
    },
    {
      icon: <FaInstagram />,
    },
    {
      icon: <FaTwitter />,
    },
    {
      icon: <FaLinkedin />,
    },
  ];

const FollowUsLinks = () => {
  return (
    <HStack spacing={8}>
    {socialLinks.map((item, index) => {
      return <HStack key={index}>{item.icon}</HStack>;
    })}
  </HStack>
  )
}

export default FollowUsLinks
