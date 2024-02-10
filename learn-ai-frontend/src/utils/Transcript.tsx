export const fetchYouTubeTranscript = async (videoUrl: string) => {
  try {
    const response = await fetch(
      "https://learnai-api.vercel.app/api/AI/getTranscript",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoUrl,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching transcript. Status: ${response.status}`);
    }

    const data = await response.json();

    // Extract the transcript text from the JSON response
    const transcriptText = data.text;
    const videoId = data.id;

    return { transcriptText, videoId };
  } catch (error) {
    console.error("Error fetching transcript:", (error as Error).message);
    throw error; // Propagate the error to the caller
  }
};
