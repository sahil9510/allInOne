import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import LoadingSpinner from "../LoadingPage/LoadingSpinner";
import styles from "./ConverterPage.module.css";


const ConverterPage = () => {
  const docRef = useRef();
  const pdfRef=useRef();
  const [file, setFile] = useState('');
  const [name,setName]=useState('');
  const [showDownload,setShowDownload]=useState(false);

    useEffect(()=>{
        if(name.length>1 && file.length>1){
            setShowDownload(true);
        }
    },[name,file])

  const fileConverter = async (data) => {
    try {
      const response = await fetch(
        "https://v2.convertapi.com/convert/doc/to/pdf?Secret=LRp2S8bhnw5UNcXK",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Parameters: [
              {
                Name: "File",
                FileValue: {
                  Name: "hello.docx",
                  Data: data,
                },
              },
            ],
          }),
        }
      );

      const responseData= await response.json();
      setFile(responseData.Files[0].FileData);
    } catch (err) {
      console.log(err);
    }
  };

  const pickedHandler = (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setName(pickedFile.name.split('.')[0]);
      let reader = new FileReader();
      reader.readAsDataURL(pickedFile);
      reader.onload = (e) => {
        console.log(e.target.result)
        fileConverter(e.target.result.split(',')[1]);
      };
    } 
  };

  const pickFileHandler = () => {
    docRef.current.click();
  };

  return (
    <div className={styles.page}>
        <div data-aos="fade-down" data-aos-duration="1000">
        <h1>Word to PDF Converter</h1>
        <h5>Save DOCX to PDF within seconds</h5>
        </div>
        <div className={`${styles.box} ${name.length>0 ? `${styles.pdf}`: `${styles.word}`}`}>
        {name.length>0 && !file &&(<div className={styles.loader}>
        <LoadingSpinner />
        </div>
        )}
        {name.length===0 && <img alt="doc" src='doc.png'/>}
        {name.length>0 && <img alt="pdf" src='pdf.png'/>}
      <input
        type="file"
        accept=".docx"
        ref={docRef}
        style={{ display: "none" }}
        onChange={pickedHandler}
      />
      <a style={{ display: "none" }} ref={pdfRef} download={name+'.pdf'} href={`data:application/pdf;base64,${file}`}>Download Link</a>
      {name.length===0 && <button className={styles.word} onClick={pickFileHandler}>Upload DOCX</button>}
      {showDownload && <button  className={styles.pdf} onClick={()=>{pdfRef.current.click()}}>Download PDF</button>}
      {name.length>0 && <p>{`${name}.${showDownload? "pdf" : "docx"}`}</p>}
      </div>
    </div>
  );
};

export default ConverterPage;
