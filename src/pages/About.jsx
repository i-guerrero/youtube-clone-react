import React from 'react'
import CarlosBio from '../Components/CarlosBio';
import IsaacBio from '../Components/IsaacBio';
import JamesBio from '../Components/JamesBio';

const Carlos = CarlosBio;
const Isaac = IsaacBio;
const James = JamesBio;

export default function About() {
  return (
    <div className="teamwork">
        <div className="member1"><Carlos /></div>
        <div className="member2">< Isaac /></div>
        <div className="member3">< James /></div>
    </div>
  )
}
