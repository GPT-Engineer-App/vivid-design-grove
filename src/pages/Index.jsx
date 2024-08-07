import { useState } from 'react';
import { Pencil, Square, Circle, Type, Eraser } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const Index = () => {
  const [selectedTool, setSelectedTool] = useState('pencil');
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);

  const tools = [
    { name: 'pencil', icon: <Pencil className="h-4 w-4" /> },
    { name: 'rectangle', icon: <Square className="h-4 w-4" /> },
    { name: 'circle', icon: <Circle className="h-4 w-4" /> },
    { name: 'text', icon: <Type className="h-4 w-4" /> },
    { name: 'eraser', icon: <Eraser className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Graphic Design App</h1>
      <div className="flex flex-wrap gap-4 mb-4">
        {tools.map((tool) => (
          <Button
            key={tool.name}
            variant={selectedTool === tool.name ? 'default' : 'outline'}
            size="icon"
            onClick={() => setSelectedTool(tool.name)}
          >
            {tool.icon}
          </Button>
        ))}
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 rounded-md cursor-pointer"
        />
        <div className="flex items-center gap-2">
          <span>Brush Size:</span>
          <Slider
            value={[brushSize]}
            onValueChange={(value) => setBrushSize(value[0])}
            max={50}
            step={1}
            className="w-32"
          />
          <span>{brushSize}px</span>
        </div>
      </div>
      <div className="flex-grow bg-white border-2 border-gray-300 rounded-lg">
        {/* Canvas will be implemented here */}
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Canvas Area (Implement drawing functionality here)
        </div>
      </div>
    </div>
  );
};

export default Index;
