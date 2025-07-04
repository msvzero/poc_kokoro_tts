import { KokoroTTS } from "kokoro-js";

const model_id = "onnx-community/Kokoro-82M-ONNX";
const tts = await KokoroTTS.from_pretrained(model_id, {
  dtype: "q8", // Options: "fp32", "fp16", "q8", "q4", "q4f16"
});

const text = "Regarding the situation with the president voices, there's one solution I've found, but the voices don't quite sound right. Increase the pitch slightly and reverse the audio. When you generate the voice, decrease the pitch as much as you increased the sample you used..";
const audio = await tts.generate(text, {
  // Use `tts.list_voices()` to list all available voices
  voice: "af_bella",
});
audio.save("audio.wav");