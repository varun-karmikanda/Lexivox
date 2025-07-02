import React,{useState,useEffect,useRef} from "react";

export default function (props) {
  const {setFile,setAudioStream} = props

  const [recordingStatus,setrecordingStatus] = useState('inactive');
  const [audioChunks,setAudioChunks] = useState([]);
  const [duration,setDuration] = useState(0);

  const mediaRecorder = useRef(null);

  const mimeType = 'audio/webm';

  async function startRecording(){
    let tempStream;
    console.log('Start recording');
    try {
      const streamData = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video:false
      })
      tempStream = streamData;
    } catch (err) {
      console.log(err.message);
      return;
    }
    setrecordingStatus('recording');

    const media = new MediaRecorder(tempStream,{type:mimeType});
    mediaRecorder.current = media;

    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) =>{
      if(typeof event.data === 'undefined') return;
      if(event.data.size === 0) return;
      localAudioChunks.push(event.data);
    }
    setAudioChunks(localAudioChunks)
  }

  async function stopRecording() {
    setrecordingStatus('inactive')
    console.log('Stop recording')

    mediaRecorder.current.stop();
    mediaRecorder.current.onstop=()=>{
      const audioBlob = new Blob(audioChunks,{type:mimeType});
      setAudioStream(audioBlob);
      setAudioChunks([]);
      setDuration(0);
    }
  }

  useEffect(()=>{
    if(recordingStatus === 'inactive') return ;

    const interval = setInterval(() => {
      setDuration(curr => curr + 1)
    }, 1000);

    return ()=> clearInterval(interval);
  })

  return (
    <main className="flex-1 p-4 flex flex-col gap-3 sm:gap-4 justify-center text-center pb-30">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Lexi<span className="text-pink-300 bold animate-color-fade">Vox</span>
      </h1>
      <h3 className="font-medium md:text-lg">
        Record{" "}
        <span className="text-pink-400">&rarr;</span> Transcribe{" "}
        <span className="text-pink-400">&rarr;</span> Translate
      </h3>
      <button onClick={recordingStatus === 'recording' ? stopRecording : startRecording} className="flex items-center justify-between text-base mx-auto w-72 max-w-full my-4 pinkShadow px-3 py-1.5 hover-animate-color-fade">
        <p className="text-pink-400">{recordingStatus === 'inactive' ?'Record': `Stop recording`}</p>
        <div className="flex items-center gap-2">
          {duration !== 0 && (
            <p className="text-sm ">{duration}s</p>
          )}
          <i className={"fa-solid duration-200 fa-microphone " +(recordingStatus === 'recording' ? 'text-rose-300':'')}></i>
        </div>
      </button>
      <p className="text-base md:text-lg">Or just <label className="text-pink-300 cursor-pointer hover:text-pink-600 duration-200 font-semibold hover-animate-color-fade">upload<input onChange={(e)=>{
        const tempFile = e.target.files[0];
        setFile(tempFile);
      }} className="hidden" type="file" accept=".mp3,.wave"/></label> .mp3</p>
      <p className="italic text-pink-300 text-md">Forever-free, because duh <span className="font-bold">&lt;3</span></p>
    </main>
  );
}
