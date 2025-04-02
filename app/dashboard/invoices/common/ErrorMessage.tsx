type Error = {
  id: string,
  error?: string[],
  message?: string | null,
}

export const ErrorMessage = ({id, error, message} : Error) => {
  return (
    error ?
      <div id={id} aria-live="polite" aria-atomic="true">
        {
          error?.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      : message ?
      <div id={id} aria-live="polite" aria-atomic="true">
        <p className="mt-2 text-sm text-red-500">
          {message}
        </p>
      </div>
        : null
  )
}