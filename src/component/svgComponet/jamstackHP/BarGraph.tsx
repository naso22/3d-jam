type BarGraphProps={
width: number
fill: string
}

export default function BarGraph({width,fill}:BarGraphProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height="35"
        viewBox={`0 0 ${width} 35`}
        style={{
            marginBottom: '30px', // パディングを適用
          }}
      >
        <path
          d="M0 0.361263L0 38.0734L161 38.0734V0.361263L0 0.361263Z"
          fill={fill}
        />
      </svg>
    </>
  );
}
