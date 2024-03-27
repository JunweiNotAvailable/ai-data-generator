import React from 'react'
import Messages from './components/Messages';
import { Content } from '@google/generative-ai';
import PromptInput from './components/PromptInput';
import InputButton from './components/InputBottom';

const Home = async () => {

  // load history from database
  const history: Content[] = [
    { role: 'user', parts: [{ text: 'Give them a reason to believe in you, everything is possible' }] },
    { role: 'model', parts: [{ text: `Belief is the cornerstone of progress and achievement. When you believe in the boundless potential of yourself and the world around you, you open the door to endless possibilities. Here's why you should believe in the power within you and the endless potential of what you can achieve:\n\n1. Limitless Creativity: Your mind is a universe of creativity waiting to be explored. With belief as your guiding light, you can tap into this wellspring of imagination to envision new ideas, solutions, and innovations that can reshape the world.\n\n2. Resilience in Adversity: Belief gives you the strength to persevere in the face of challenges. It fuels your resilience and helps you navigate through obstacles with determination and unwavering resolve, turning setbacks into stepping stones towards success.\n\n3. Unleashing Potential: When you believe in yourself, you unlock your full potential. You begin to realize that your capabilities are far greater than you once thought, empowering you to pursue your dreams and aspirations with courage and conviction.\n\n4. Manifesting Dreams into Reality: Belief is the catalyst that transforms dreams into reality. It empowers you to take inspired action, turning your aspirations into tangible achievements through dedication, hard work, and a steadfast belief in your ability to succeed.\n\n5. Inspiring Others: Your belief has the power to inspire those around you. By demonstrating unwavering faith in your dreams and abilities, you become a beacon of hope and motivation, encouraging others to believe in themselves and pursue their own aspirations.\n\n6. Creating Positive Change: Belief is the driving force behind positive change. When you believe in the possibility of a better tomorrow and your ability to contribute to that change, you become an agent of transformation, inspiring others to join you in creating a brighter future for all.\n\n7. Embracing Growth: Belief fosters a growth mindset, encouraging you to embrace challenges as opportunities for learning and personal growth. It enables you to continuously evolve, adapt, and expand your horizons, realizing that with dedication and perseverance, anything is possible.\n\nIn essence, belief is the cornerstone upon which extraordinary accomplishments are built. It is the unwavering faith in yourself and the limitless potential of the world around you that propels you forward, turning dreams into realities and impossibilities into possibilities. So, dare to believe, for in belief lies the power to achieve the extraordinary.` }] },
    { role: 'user', parts: [{ text: 'As the famous Rumi who lives in Turkey said - When you start walking the way, the way appears' }] },
    { role: 'model', parts: [{ text: `The statement "When you start walking the way, the way appears" is often attributed to the 13th-century Persian poet Jalal ad-Din Muhammad Rumi, commonly known as Rumi. While Rumi was not Turkish himself, his works have deeply influenced Turkish culture and literature. Rumi's poetry transcends cultural and linguistic boundaries, resonating with people around the world with its themes of love, spirituality, and the journey of the soul.Rumi's poetry often reflects the idea that through action and movement, clarity emerges, and the path forward becomes evident. This particular phrase encapsulates the essence of his teachings, emphasizing the importance of taking the first step in any endeavor, trusting in the process, and allowing the journey to unfold naturally.\n\nRumi's works have been widely translated and admired globally, and his profound insights continue to inspire and guide people from all walks of life on their personal and spiritual journeys.` }] },
    { role: 'user', parts: [{ text: 'React example' }] },
    { role: 'model', parts: [{ text: `\`\`\`jsx\nimport React, { useState } from 'react';\n\nfunction App() {\n  const [value, setValue] = useState('');\n  \n  // Calculate the number of rows based on the content\n  const rows = Math.min((value.match(/\\n/g) || []).length + 1, 5);\n\n  // Event handler for textarea change\n  const handleChange = (event) => {\n    setValue(event.target.value);\n  };\n\n  return (\n    <textarea\n      value={value}\n      onChange={handleChange}\n      rows={rows}\n      style={{ resize: 'none', width: '100%', minHeight: '1em' }}\n    />\n  );\n}\n\nexport default App;\n\`\`\`` }] },
  ];

  return (
    <div className='flex flex-1 overflow-hidden'>
      <main className='flex-1 flex justify-center items-center'>
        <div className='transition-2 flex flex-col justify-center items-center w-full h-full'>
          <Messages initialHistory={history} />
          <div className='flex flex-col items-center text-center pt-2 sticky bottom-0 w-5/6 max-w-3xl'>
            <PromptInput />
            <InputButton />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home