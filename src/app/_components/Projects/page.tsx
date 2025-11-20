/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, {
    useCallback,
    useRef,
    useState,
    Suspense,
    useEffect,
    useMemo,
  } from "react";
  import { Canvas, useFrame, useThree } from "@react-three/fiber";
  import { OrbitControls, Preload, Image as ImageImpl, type ImageProps } from "@react-three/drei";
  import { a as aThree } from "@react-spring/three";
  import * as THREE from "three";

  const projects = [
    {
      title: "Singapore Limousine",
      url: "https://singaporelimousine.com/",
      image: "/singaporelimousine.png",
      description: "A luxury limousine service in Singapore.",
    },
    {
      title: "Glance Limousine",
      url: "https://www.glancelimousine.com.sg/",
      image: "/glancelimousine.png",
      description: "A premier limousine service in Singapore.",
    },
    {
      title: "Jasmine Global",
      url: "https://www.jasmineglobal.net/",
      image: "/jasmineglobal.png",
      description: "A global logistics and freight forwarding company.",
    },
    {
      title: "Elyff Events",
      url: "https://www.elyffevents.com.sg/",
      image: "/elyffevents.png",
      description: "A full-service event management company.",
    },
    {
      title: "Elyff Playground",
      url: "https://elyffplayground.com.sg/",
      image: "/elyffplayground.png",
      description: "A fun and interactive playground for kids.",
    },
  ];

  const damp = THREE.MathUtils.damp;

  function Image({ ...props }: ImageProps) {
    const c = useMemo(() => new THREE.Color(), []);
    const ref = useRef<THREE.Mesh>(null!);
    const [hovered, hover] = useState(false);

    useFrame((state, delta) => {
      (ref.current.material as THREE.MeshBasicMaterial).color.lerp(
        c.set(hovered ? "white" : "#ccc"),
        hovered ? 0.4 : 0.05
      );
    });

    return (
      <ImageImpl ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} {...props} />
    );
  }

  function Images({
    images,
    positions,
    onImageClick,
  }: {
    images: any[];
    positions: any[];
    onImageClick: (index: number) => void;
  }) {
    return (
      <>
        {images.map((img, i) => (
          <Image
            key={i}
            url={img}
            position={positions[i]}
            scale={2}
            onClick={() => onImageClick(i)}
          />
        ))}
      </>
    );
  }

  function Rig() {
    const { camera, mouse } = useThree();
    const vec = new THREE.Vector3();

    return useFrame(() => {
      camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.02);
      camera.lookAt(0, 0, 0);
    });
  }

  const Page = () => {
    const [clicked, setClicked] = useState<number | null>(null);

    const handleImageClick = (index: number) => {
      setClicked(index);
    };

    const handleCloseClick = () => {
      setClicked(null);
    };

    return (
      <div className="w-full h-screen">
        <Canvas>
          <Suspense fallback={null}>
            <group>
              <Images
                images={projects.map((p) => p.image)}
                positions={[
                  [-2, 0, 0],
                  [0, 0, 0],
                  [2, 0, 0],
                  [-1, -2, 0],
                  [1, -2, 0],
                ]}
                onImageClick={handleImageClick}
              />
            </group>
            <Rig />
            <Preload all />
          </Suspense>
        </Canvas>
        {clicked !== null && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold">{projects[clicked].title}</h2>
              <p>{projects[clicked].description}</p>
              <a
                href={projects[clicked].url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                Visit
              </a>
              <button
                onClick={handleCloseClick}
                className="absolute top-4 right-4 text-white"
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default Page;
