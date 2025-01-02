interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-red-500 mb-4">{message}</p>
        <button onClick={onRetry} className="text-primary hover:underline">
          Try again
        </button>
      </div>
    </div>
  );
}
