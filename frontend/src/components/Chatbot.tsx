import React, { useState, useRef, useEffect } from 'react';

const faq = [
  {
    q: 'What destinations do you offer?',
    a: 'We offer trips to Dubai, Bali, Thailand, Vietnam, Malaysia, India, Sri Lanka, Singapore, and more!'
  },
  {
    q: 'How can I book a trip?',
    a: 'You can book a trip by filling out our contact form or messaging us on <a href="https://wa.me/919828022224" target="_blank" rel="noopener noreferrer" class="text-amber-500 underline">WhatsApp</a>.'
  },
  {
    q: 'Do you provide visa assistance?',
    a: 'Yes, we provide visa assistance for most destinations as part of our travel packages.'
  },
  {
    q: 'What is your refund policy?',
    a: 'Our refund and cancellation policy is detailed on our <a href="/refund" class="text-amber-500 underline">Refund & Cancellation Policy</a> page. Please refer to it for more information.'
  },
  {
    q: 'How can I contact customer support?',
    a: 'You can <a href="mailto:care@routefever.com" class="text-amber-500 underline">email us</a> or message us on <a href="https://wa.me/919828022224" target="_blank" rel="noopener noreferrer" class="text-amber-500 underline">WhatsApp</a>.'
  }
];

const fallbackMessage =
  'For this information, you can contact us on <a href="https://wa.me/919828022224" target="_blank" rel="noopener noreferrer" class="text-amber-500 underline">WhatsApp</a> or <a href="mailto:care@routefever.com" class="text-amber-500 underline">email us</a>.';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([]);
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleQuestionClick = (faqItem: typeof faq[0]) => {
    setMessages(msgs => [
      ...msgs,
      { from: 'user', text: faqItem.q },
      { from: 'bot', text: faqItem.a }
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(msgs => [...msgs, { from: 'user', text: userMsg }]);
    setInput('');

    // Try to match FAQ
    const match = faq.find(f => userMsg.toLowerCase().includes(f.q.toLowerCase().split(' ')[0]));
    setTimeout(() => {
      if (match) {
        setMessages(msgs => [...msgs, { from: 'bot', text: match.a }]);
      } else {
        setMessages(msgs => [...msgs, { from: 'bot', text: fallbackMessage }]);
      }
    }, 500);
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 bg-amber-500 text-white rounded-full p-4 shadow-lg z-50"
        onClick={() => setOpen(o => !o)}
        aria-label="Open chat"
      >
        💬
      </button>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-lg z-50 flex flex-col">
          <div className="bg-amber-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span>Chat with us</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat">✖️</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto" style={{ maxHeight: 300 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 text-sm ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.from === 'bot' ? (
                  <span className={`inline-block px-3 py-1 rounded bg-gray-100`} dangerouslySetInnerHTML={{ __html: msg.text }} />
                ) : (
                  <span className={`inline-block px-3 py-1 rounded bg-amber-100`}>
                    {msg.text}
                  </span>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input and FAQ always visible at the bottom */}
          <div className="border-t p-2 flex flex-col gap-2">
            {showInput && (
              <div className="flex mb-2">
                <input
                  className="flex-1 border rounded px-2 py-1 mr-2"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  autoFocus
                />
                <button className="bg-amber-500 text-white px-3 py-1 rounded" onClick={handleSend}>Send</button>
              </div>
            )}
            <div className="flex flex-col gap-2">
              {faq.map((f, i) => (
                <button
                  key={i}
                  className="text-left px-3 py-2 rounded bg-amber-100 hover:bg-amber-200 text-gray-800 border border-amber-200 transition-colors"
                  onClick={() => handleQuestionClick(f)}
                >
                  {f.q}
                </button>
              ))}
              {!showInput && (
                <button
                  className="mt-2 px-3 py-2 rounded bg-amber-500 text-white hover:bg-amber-600 transition-colors font-semibold"
                  onClick={() => setShowInput(true)}
                >
                  Send a Message
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 