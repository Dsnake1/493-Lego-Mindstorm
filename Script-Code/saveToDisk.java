public static void saveToDisk(String precompiledFile, String text)
{
  File file = new File (precompiledFile);
  BufferedWriter out = new BufferedWriter(new FileWriter(file));
  out.write(text);
  out.close();
}
