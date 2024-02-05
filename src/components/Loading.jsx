const Loading = () => {
  return (
    <>
    <p 
    style={{height:"300px"}}  
    className="placeholder-glow col-md-6 d-flex flex-column align-items-center justify-content-center gap-4"
    >
      <span className="placeholder w-75 placeholder-lg"></span>
      <span className="placeholder w-100 placeholder-lg"></span>
      <span className="placeholder w-100 placeholder-lg"></span>
      <div className="d-flex w-100 gap-2 justify-content-center">
      <span className="placeholder w-25 placeholder-lg"></span>
      <span className="placeholder w-25 placeholder-lg"></span>
      </div>
    </p>

      <span 
      style={{height:"300px"}}
      className="placeholder rounded col-md-6 placeholder-lg placeholder-wave"
      ></span>
    </>
  );
};

export default Loading;
