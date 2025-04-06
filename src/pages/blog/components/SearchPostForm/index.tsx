import { FormContainer } from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useContext } from "react";
import { BlogContext } from "../../../../contexts/BlogContext";

const issueFormValidationSchema = zod.object({
  issue: zod.string()
});

type formData = zod.infer<typeof issueFormValidationSchema>;

export function SearchPostForm() {
  const { fechPosts } = useContext(BlogContext)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      issue: '',
    },
    resolver: zodResolver(issueFormValidationSchema),
  })

  function handleSearchIssue(data: formData) {
    fechPosts(data.issue)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchIssue)}>
      <input 
        {...register('issue')}
        type="text" 
        placeholder="Search content"
      />
    </FormContainer>
  )
}