import React, { useState, useEffect, useContext, useRef } from "react";
import "../css/loading.css";
import { SplineContext } from "../Context/SplineContext";
import { animate, createScope, createSpring } from "animejs";

const LoadingScreen = ({ onLoaded }) => {
  const [realProgress, setRealProgress] = useState(0);
  const [progress, setProgress] = useState(0);
  const { setSplineModel } = useContext(SplineContext);
  const rootRef = useRef(null);
  const scope = useRef(null);

  const resources = React.useMemo(
    () => [
      {
        type: "spline",
        url: "https://prod.spline.design/nTebIFs-JJgnfeDN/scene.splinecode",
      },
      {
        type: "homepage",
        url: "http://localhost:3000/",
      },
    ],
    []
  );

  useEffect(() => {
    const totalResources = resources.length;
    let loadedResources = 0;

    const updateProgress = () => {
      loadedResources++;
      const newProgress = Math.floor((loadedResources / totalResources) * 100);
      setRealProgress(newProgress);

      if (loadedResources === totalResources) {
        const waitForVisualCompletion = setInterval(() => {
          if (progress >= 100) {
            clearInterval(waitForVisualCompletion);
            scope.current.methods?.triggerCompleteAnimation();
            setTimeout(() => {
              if (typeof onLoaded === "function") {
                onLoaded();
              }
            }, 800);
          }
        }, 50);
      }
    };

    resources.forEach((resource) => {
      if (resource.type === "spline") {
        fetch(resource.url)
          .then((response) => {
            if (!response.ok)
              throw new Error(`HTTP error! Status: ${response.status}`);
            setSplineModel({ url: resource.url, preloaded: true });
            updateProgress();
          })
          .catch((error) => {
            console.error("Errore nel caricamento del modello Spline:", error);
            updateProgress();
          });
      } else {
        fetch(resource.url)
          .then(() => updateProgress())
          .catch(() => updateProgress());
      }
    });

    if (totalResources === 0) {
      setRealProgress(100);
      if (typeof onLoaded === "function") {
        onLoaded();
      }
    }
  }, [onLoaded, resources, setSplineModel, progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < realProgress) {
          return Math.min(prev + 1, realProgress);
        }
        return prev;
      });
    }, 38);
    return () => clearInterval(interval);
  }, [realProgress]);

  // Effetti Anime.js senza animazione del counter
  useEffect(() => {
    scope.current = createScope({ root: rootRef }).add((scope) => {
      // Solo animazione finale delle bar
      scope.add("triggerCompleteAnimation", () => {
        animate(".bar", {
          height: 50,
          background: "#7d88ec",
          delay: (el, i) => i * 50,
          duration: 800,
          ease: createSpring({ stiffness: 180 }),
        });
      });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <div className="loading-container" ref={rootRef}>
      <h1 className="counter">{progress}</h1>
      <div className="overlay">
        {[...Array(10)].map((_, i) => (
          <div className="bar" key={i}></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
