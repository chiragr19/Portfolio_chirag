export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-semibold gradient-text">
        {title}
      </h2>
      <div className="title-bar" />
      {subtitle && (
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">{subtitle}</p>
      )}
    </div>
  );
}
