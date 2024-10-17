// components/A4PageWrapper.jsx
const A4PageWrapper = ({ children }) => {
    return (
      <div className="a4-page-wrapper" style={{ width: '210mm', height: '297mm' }}>
        {children}
      </div>
    );
  };
  
  export default A4PageWrapper;
  