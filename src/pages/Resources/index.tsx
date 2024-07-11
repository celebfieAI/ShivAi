import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import Dropzone, { DropzoneElement } from "@/components/Base/Dropzone";
import { useEffect, useRef } from "react";

function Main() {

  const dropzoneMultipleRef = useRef<DropzoneElement>();

  useEffect(() => {
   
    const elDropzoneMultipleRef = dropzoneMultipleRef.current;
    if (elDropzoneMultipleRef) {
      elDropzoneMultipleRef.dropzone.on("success", () => {
        alert("Added file.");
      });
      elDropzoneMultipleRef.dropzone.on("error", () => {
        alert("No more files please!");
      });
    }
  }, []);


  return (
    <>
     <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        File Upload
                      </div>
                    
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Dropzone" component provides an easy way to
                        implement file upload functionality in your web
                        application. This example demonstrates how to create a
                        "Dropzone" for single file uploads, with options for
                        setting file upload constraints and additional headers.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Dropzone
                              getRef={(el) => {
                                dropzoneMultipleRef.current = el;
                              }}
                              options={{
                                url: "https://httpbin.org/post",
                                thumbnailWidth: 150,
                                maxFilesize: 0.5,
                                headers: {
                                  "My-Awesome-Header": "header value",
                                },
                              }}
                              className="dropzone"
                            >
                              <div className="text-lg font-medium">
                                Drop files here or click to upload.
                              </div>
                              <div className="text-gray-600">
                                This is just a demo dropzone. Selected files are
                                <span className="font-medium">not</span>{" "}
                                actually uploaded.
                              </div>
                            </Dropzone>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
            <Dropzone
              getRef={(el) => {
                dropzoneMultipleRef.current = el;
              }}
              options={{
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: { "My-Awesome-Header": "header value" },
              }}
              className="dropzone"
            >
              <div className="text-lg font-medium">
                Drop files here or click to upload.
              </div>
              <div className="text-gray-600">
                This is just a demo dropzone. Selected files are
                <span className="font-medium">not</span> actually
                uploaded.
              </div>
            </Dropzone>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                    
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
    </>
  );
}

export default Main;
