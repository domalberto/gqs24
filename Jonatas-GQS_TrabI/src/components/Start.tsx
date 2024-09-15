import { Clock1, GraduationCap } from "lucide-react";
import Header from "./header/Header";

export default function Start() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow relative mx-2 mb-2 shadow-lg">
        <img
          src="/src/assets/images/bg-EngComp.jpg"
          className="absolute top-0 left-0 w-full h-full rounded-xl object-cover"
          alt="Background"
        />
        
        <div className="absolute inset-0 bg-azul rounded-xl opacity-65"></div>
        <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <img src="/src/assets/images/logo_engcomp.png" className="h-20 mx-auto mb-2" alt="" />
          <h2 className="text-5xl m-auto w-2/3 font-bold ">Engenharia da Computação</h2>
          <div className="w-1/2 px-8 m-auto flex text-amarelo justify-between max-w-2xl">
            <div className="flex items-center ">
              <GraduationCap size={"18px"}></GraduationCap>
              <p className="pl-1">Graduação presencial</p>
            </div>
            <div className="flex items-center">
              <Clock1 size={"18px"}></Clock1>
              <p className="pl-1">4240H</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
