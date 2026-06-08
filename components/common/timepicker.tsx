import React from "react";
import { Modal } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface TimePickerModalProps {
  visible: boolean;
  value: Date;
  onClose: () => void;
  onSelect: (time: Date) => void;
}

export default function TimePickerModal({
  visible,
  value,
  onClose,
  onSelect,
}: TimePickerModalProps) {
  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <DateTimePicker
        value={value}
        mode="time"
        is24Hour={false}
        onChange={(event, selectedTime) => {
          if (event.type === "dismissed") {
            onClose();
            return;
          }

          if (selectedTime) {
            onSelect(selectedTime);
            onClose();
          }
        }}
      />
    </Modal>
  );
}