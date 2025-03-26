export default {
  async fetch(request, env, ctx) {
    try {
      // Step 1: Capture the Request Path
      const url = new URL(request.url);
      const path = url.pathname; // This gets the path of the request      

// Step 2: Construct the Target URL
      const targetUrl = `https://hup555.framer.website/${path}`;      

// Step 3: Fetch the Page
      const response = await fetch(targetUrl);
      let content = await response.text(); // Assuming the content is HTML      

//Show this file to remove the framer tag
const cssToHideBadge = `<style>#__framer-badge-container { display: none !important; }</style>`;
      content = content.replace('</head>', `${cssToHideBadge}</head>` );


const cssToHideeditor = `<style>#__framer-editorbar-controller { display: none !important; }</style>`;
      content = content.replace('</head>', `${cssToHideeditor}</head>` );      
// Step 4: Respond with the Page
      return new Response(content, {
        headers: {"Content-Type": "text/html"} // Ensure proper content type
      });
    } catch (e) {
      // Handle any errors
      return new Response('An error occurred: ' + e.message, { status: 500 });
    }
  }
};
