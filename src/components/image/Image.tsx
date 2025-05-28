const Image = ({
  width,
  height,
  classPrefix,
  src,
}: {
  width?: string;
  height?: string;
  classPrefix: string;
  src: string;
}) => {
  return (
    <img
      className={`${classPrefix}-image`}
      src={src}
      width={width}
      height={height}
    />
  );
};

export default Image;
