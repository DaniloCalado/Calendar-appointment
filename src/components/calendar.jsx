import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendario = ({ eventos, onSlotSelect }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotSelect = (slotInfo) => {
    setSelectedSlot(slotInfo);
    onSlotSelect(slotInfo);
  };

  return (
    <div>
      <h2>Calendário de Reservas</h2>
      <Calendar
        localizer={localizer}
        events={eventos}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        selectable
        onSelectSlot={handleSlotSelect}
        selected={selectedSlot}
      />
    </div>
  );
};

export default Calendario;
