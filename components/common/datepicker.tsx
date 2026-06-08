import { Modal, View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";


interface DatePickerProps {
  visible: boolean;
    value: Date;
    onClose: () => void;
    onSelect: (time: Date) => void;
}

export default function DatePicker({
  visible,
  value,
  onClose,
  onSelect,
}: DatePickerProps) {

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View className="flex-1 justify-center bg-black/50 px-6">
          <DateTimePicker
            value={value}
            mode="date"
            is24Hour={false}
            onChange={(_, selectedDate) => {
              if (selectedDate) {
                onSelect(selectedDate);
                onClose();
              }
            }}
          />
      </View>
    </Modal>
  );
}